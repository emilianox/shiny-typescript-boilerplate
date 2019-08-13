declare module '*.scss' {
  export const content: { [className: string]: string };
  export default content;
}


declare module "*.png" {
  const value: any;
  export default value;
}
