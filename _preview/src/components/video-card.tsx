import { type VideoNodeDataDefinition } from "~/types/cytoscape-elements";

export const VideoCard = ({
  id,
  label,
  parent,
  tier,
  type,
  authors,
  link,
  tags,
}: VideoNodeDataDefinition) => {
  return (
    <ul>
      <li>{id}</li>
      <li>{label}</li>
      <li>{parent}</li>
      <li>{tier}</li>
      <li>{type}</li>
      <li>{authors.map((author) => author)}</li>
      <li>{link}</li>
      <li>{tags.map((tag) => tag)}</li>
    </ul>
  );
};
