import { useStaticQuery, graphql } from 'gatsby';

export const useGetIcons = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImages {
      allCloudinaryMedia(filter: { folder: { eq: "projectImages" } }, sort: { publicId: ASC }) {
        nodes {
          id
          publicId
          cloudinaryData {
            secure_url
          }
          metadata {
            ids
            link
          }
        }
      }
    }
  `);

  type image = {
    id: number;
    publicId: string;
    cloudinaryData: {
      secure_url: string;
    };
    metadata: {
      id: string;
      link: string;
    };
  };

  const images: image[] = data.allCloudinaryMedia.nodes.map(
    (node: { id: string; publicId: string; cloudinaryData: object; metadata: object }) => {
      const { id, publicId, cloudinaryData, metadata } = node;
      return {
        id,
        publicId,
        cloudinaryData,
        metadata,
      };
    }
  );

  return {
    images,
  };
};
