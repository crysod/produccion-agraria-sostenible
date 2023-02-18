export interface Response {
  from?:     number;
  limit?:    number;
  total?:    number;
  response?: Body;
}

export interface Href {
  rel?:    string;
  method?: string;
  href?:   string;
}

export interface Body {
  name?:        string;
  description?: string;
  status: Boolean;
  href?:        Href;
}

