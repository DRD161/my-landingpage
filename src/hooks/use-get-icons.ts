import { useStaticQuery, graphql } from 'gatsby';

export const useGetIcons = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryIcons {
      allCloudinaryMedia(filter: { folder: { eq: "icons" } }, sort: { publicId: ASC }) {
        nodes {
          id
          publicId
          cloudinaryData {
            secure_url
          }
          metadata {
            ids
            link
            alt
          }
        }
      }
    }
  `);

  type icon = {
    id: number;
    publicId: string;
    cloudinaryData: {
      secure_url: string;
    };
    metadata: {
      id: string;
      link: string;
      alt: string;
    };
  };

  const icons: icon[] = data.allCloudinaryMedia.nodes.map(
    (node: { id: string; publicId: string; secure_url: string; cloudinaryData: object; metadata: object }) => {
      const { id, publicId, secure_url, cloudinaryData, metadata } = node;
      return {
        id,
        publicId,
        cloudinaryData,
        secure_url,
        metadata,
      };
    }
  );

  return {
    icons,
  };
};
