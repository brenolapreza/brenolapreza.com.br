import Link from "next/link";

export interface CardProps {
  id: string;
  postName: string[];
  author: string[];
}

export const Card = ({ author, id, postName }: CardProps) => {
  return (
    <div>
      <h2>{postName}</h2>
      <p>{author}</p>
    </div>
  );
};
