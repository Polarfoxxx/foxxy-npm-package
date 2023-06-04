export type Props = {
    text: string,
    variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean",
    type?: "button" | "submit" | "reset",
    selector?: string,
    border?: boolean
  }
  
  export type TypeVariant = {
    variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean",
  }

  export type TypeReturnStyleForElement= {
    defStyle: {}
    styles: {}
}
