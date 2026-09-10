import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

const mockSendForm = vi.fn();

vi.mock('@emailjs/browser', () => ({
  default: {
    sendForm: (...args: unknown[]) => mockSendForm(...args),
  },
}));

vi.stubEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID', 'test-service');
vi.stubEnv('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 'test-template');
vi.stubEnv('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', 'test-key');

const ServiceEnquiryForm = (await import('@/components/ServiceEnquiryForm')).default;

describe('ServiceEnquiryForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSendForm.mockResolvedValue({});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders all required fields', () => {
    render(<ServiceEnquiryForm />);
    expect(screen.getByLabelText(/Your name/)).toBeDefined();
    expect(screen.getByLabelText(/Business name/)).toBeDefined();
    expect(screen.getByLabelText(/Email/)).toBeDefined();
    expect(screen.getByLabelText(/Phone/)).toBeDefined();
    expect(screen.getByLabelText(/Business location/)).toBeDefined();
  });

  it('renders optional fields', () => {
    render(<ServiceEnquiryForm />);
    expect(screen.getByLabelText(/Business website/)).toBeDefined();
    expect(screen.getByLabelText(/Facebook \/ Instagram/)).toBeDefined();
    expect(screen.getByLabelText(/What does your business do/)).toBeDefined();
    expect(screen.getByLabelText(/What services do you offer/)).toBeDefined();
    expect(screen.getByText('Yes')).toBeDefined();
    expect(screen.getByText('No')).toBeDefined();
    expect(screen.getByText('Some')).toBeDefined();
    expect(screen.getByLabelText(/Anything else/)).toBeDefined();
  });

  it('shows errors when submitting empty required fields', async () => {
    render(<ServiceEnquiryForm />);
    fireEvent.click(screen.getByText('Send Enquiry'));

    await waitFor(() => {
      expect(screen.getByText('Name is required.')).toBeDefined();
      expect(screen.getByText('Business name is required.')).toBeDefined();
      expect(screen.getByText('Email is required.')).toBeDefined();
      expect(screen.getByText('Phone number is required.')).toBeDefined();
      expect(screen.getByText('Business location is required.')).toBeDefined();
    });
  });

  it('shows email validation error for invalid email', async () => {
    render(<ServiceEnquiryForm />);
    fireEvent.change(screen.getByLabelText(/Your name/), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Business name/), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'notanemail' } });
    fireEvent.change(screen.getByLabelText(/Phone/), { target: { value: '0871234567' } });
    fireEvent.change(screen.getByLabelText(/Business location/), { target: { value: 'Dublin' } });

    fireEvent.click(screen.getByText('Send Enquiry'));

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address.')).toBeDefined();
    });
  });

  it('submits successfully with valid data', async () => {
    render(<ServiceEnquiryForm />);

    fireEvent.change(screen.getByLabelText(/Your name/), { target: { value: 'John Murphy' } });
    fireEvent.change(screen.getByLabelText(/Business name/), { target: { value: "Murphy's Hardware" } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/), { target: { value: '087 123 4567' } });
    fireEvent.change(screen.getByLabelText(/Business location/), { target: { value: 'Greystones' } });

    fireEvent.click(screen.getByText('Send Enquiry'));

    await waitFor(() => {
      expect(mockSendForm).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(screen.getByText('Thanks!')).toBeDefined();
      expect(screen.getByText(/I'll be in touch shortly/)).toBeDefined();
    });
  });

  it('shows error state when EmailJS fails', async () => {
    mockSendForm.mockRejectedValueOnce(new Error('Network error'));

    render(<ServiceEnquiryForm />);

    fireEvent.change(screen.getByLabelText(/Your name/), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Business name/), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/), { target: { value: '0871234567' } });
    fireEvent.change(screen.getByLabelText(/Business location/), { target: { value: 'Dublin' } });

    fireEvent.click(screen.getByText('Send Enquiry'));

    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/)).toBeDefined();
      expect(screen.getByText('email me directly')).toBeDefined();
    });
  });

  it('has a honeypot field hidden from view', () => {
    render(<ServiceEnquiryForm />);
    const honeypot = screen.getByLabelText('Website');
    expect(honeypot).toBeDefined();
    expect(honeypot.closest('[aria-hidden="true"]')).toBeDefined();
  });

  it('shows loading state while submitting', async () => {
    let resolveSend!: (value: unknown) => void;
    mockSendForm.mockImplementation(
      () => new Promise((resolve) => { resolveSend = resolve; })
    );

    render(<ServiceEnquiryForm />);

    fireEvent.change(screen.getByLabelText(/Your name/), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Business name/), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone/), { target: { value: '0871234567' } });
    fireEvent.change(screen.getByLabelText(/Business location/), { target: { value: 'Dublin' } });

    fireEvent.click(screen.getByText('Send Enquiry'));

    await waitFor(() => {
      expect(screen.getByText('Sending…')).toBeDefined();
    });

    resolveSend({});
  });

  it('renders the submit button', () => {
    render(<ServiceEnquiryForm />);
    const button = screen.getByRole('button', { name: /Send Enquiry/ });
    expect(button).toBeDefined();
    expect(button.getAttribute('type')).toBe('submit');
  });
});
