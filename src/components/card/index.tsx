import Link from "next/link";

export interface CardProps {
  id: string;
  postName: string[];
  author: string[];
}

export const Card = ({ author, id, postName }: CardProps) => {
  return (
    <div className="bg-main-background border border-mainStroke p-2">
      <h2>{postName}</h2>
      <p className="text-sm">Autor: {author}</p>
    </div>
  );
};
