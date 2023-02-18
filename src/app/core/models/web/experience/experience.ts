export interface Welcome {
  from?:     number;
  limit?:    number;
  total?:    number;
  response?: Response[];
}

export interface Response {
  id?:                string;
  tituloExperiencia?: string;
  experiencia?:       string;
  restricciones?:     string;
  numeroDeCupos?:     number;
  valor?:             string;
  apertura?:          string;
  finalizacion?:      string;
  href?:              Href;
}

export interface Href {
  rel?:    string;
  method?: string;
  href?:   string;
}
