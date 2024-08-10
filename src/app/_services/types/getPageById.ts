export interface IPageByIdProps {
  object: string;
  results: Result[];
  next_cursor: any;
  has_more: boolean;
  type: string;
  block: Block;
  request_id: string;
}

export interface Result {
  object: string;
  id: string;
  parent: Parent;
  created_time: string;
  last_edited_time: string;
  created_by: CreatedBy;
  last_edited_by: LastEditedBy;
  has_children: boolean;
  archived: boolean;
  in_trash: boolean;
  type: string;
  heading_1?: Heading1;
  paragraph?: Paragraph;
}

export interface Parent {
  type: string;
  page_id: string;
}

export interface CreatedBy {
  object: string;
  id: string;
}

export interface LastEditedBy {
  object: string;
  id: string;
}

export interface Heading1 {
  rich_text: RichText[];
  is_toggleable: boolean;
  color: string;
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Text {
  content: string;
  link: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Paragraph {
  rich_text: RichText2[];
  color: string;
}

export interface RichText2 {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
  href: any;
}

export interface Text2 {
  content: string;
  link: any;
}

export interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Block {}
