export interface Welcome {
  response?: Response[];
}

export interface Response {
  id?:           string;
  catalogue?:    string;
  name?:         string;
  description?:  string;
  precio?:       string;
  existencias?:  number;
  foto?:         string;
  tituloReseña?: string;
  reseña?:       string;
  href?:         Href[];
}

export interface Href {
  rel?:    string;
  method?: string;
  href?:   string;
}
