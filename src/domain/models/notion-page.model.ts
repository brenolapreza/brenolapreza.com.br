export interface IPageByIdProps {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  in_trash: boolean
  properties: Properties
  url: string
  public_url: any
  request_id: string
}

export interface CreatedBy {
  object: string
  id: string
}

export interface LastEditedBy {
  object: string
  id: string
}

export interface Parent {
  type: string
  database_id: string
}

export interface Properties {
  Tags: Tags
  Author: Author
  "Created Date": CreatedDate
  Nome: Nome
}

export interface Tags {
  id: string
  type: string
  multi_select: MultiSelect[]
}

export interface MultiSelect {
  id: string
  name: string
  color: string
}

export interface Author {
  id: string
  type: string
  people: People[]
}

export interface People {
  object: string
  id: string
  name: string
  avatar_url: string
  type: string
  person: Person
}

export interface Person {
  email: string
}

export interface CreatedDate {
  id: string
  type: string
  date: Date
}

export interface Date {
  start: string
  end: any
  time_zone: any
}

export interface Nome {
  id: string
  type: string
  title: Title[]
}

export interface Title {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

export interface Text {
  content: string
  link: any
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface IlistPageToMd {
  parent: string;
}

