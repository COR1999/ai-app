import { useEffect } from "react";

interface CredlyBadgeProps {
  badgeId: string;
  width?: number;
  height?: number;
}

const CredlyBadge = ({ badgeId, width = 150, height = 270 }: CredlyBadgeProps) => {
  useEffect(() => {
    const existingScript = document.getElementById("credly-script");

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.id = "credly-script";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // When script already exists, manually trigger the badge load
      // @ts-ignore
      if (window?.Credly?.renderBadges) {
        // @ts-ignore
        window.Credly.renderBadges();
      }
    }
  }, []);

  return (
    <div
      data-iframe-width={width}
      data-iframe-height={height}
      data-share-badge-id={badgeId}
      data-share-badge-host="https://www.credly.com"
    />
  );
};

export default CredlyBadge;
