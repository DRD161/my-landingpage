import { useStaticQuery, graphql } from 'gatsby';

export const useGetIcons = () => {
  const data = useStaticQuery(graphql`
    query GetIcons {
      allFile(filter: { sourceInstanceName: { eq: "icons" } }, sort: { name: ASC }) {
        nodes {
          id
          name
          relativePath
        }
      }
    }
  `);

  type icon = {
    id: number;
    relativePath: string;
  };

  const icons: icon[] = data.allFile.nodes.map((node: { id: string; relativePath: string }) => {
    const { id, relativePath } = node;
    return {
      id,
      relativePath,
    };
  });

  return {
    icons,
  };
};
