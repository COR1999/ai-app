import Image from 'next/image';

interface CertificateEmbedProps {
  imageUrl: string;
  linkUrl?: string;
  altText?: string;
  width?: number;
  height?: number;
}

export default function CertificateEmbed({
  imageUrl,
  linkUrl,
  altText = "Certificate",
  width = 800,
  height = 565,
}: CertificateEmbedProps) {
  const image = (
    <div className="w-full max-w-2xl">
      <Image
        src={imageUrl}
        alt={altText}
        width={width}
        height={height}
        className="rounded-lg shadow-md border"
        priority
      />
    </div>
  );

  return linkUrl ? (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      {image}
    </a>
  ) : (
    image
  );
}
