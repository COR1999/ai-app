'use client';

import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-[200px] flex items-center justify-center p-8 text-center">
            <div>
              <p className="text-lg font-semibold text-primary mb-2">
                Something went wrong.
              </p>
              <p className="text-text-secondary text-sm">
                Please try refreshing the page.
              </p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
