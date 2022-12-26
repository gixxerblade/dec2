import { SVGProps } from './SVGProps'

export const BicycleGallery = ({ height, width, color }: SVGProps) => {
  return (
    <svg
      viewBox="0 0 917.523 499.454"
      height={height || "4rem"}
      width={width || "4rem"}
      fill={color ||"#000000"}
    >
      <path
        d="M10.304 246.319h66.972c16.621 0 29.192 4.26 37.71 12.779 6.594 6.594 9.891 14.766 9.891 24.52v.412c0 4.12-.549 7.762-1.649 10.922-.963 3.16-2.333 6.044-4.12 8.654a30.125 30.125 0 01-5.977 6.593 37.24 37.24 0 01-7.214 4.947c8.38 3.16 14.978 7.486 19.786 12.984 4.806 5.357 7.209 12.844 7.209 22.462v.412c0 6.594-1.305 12.363-3.915 17.31-2.472 4.942-6.113 9.065-10.92 12.364-4.673 3.296-10.373 5.769-17.105 7.417-6.595 1.648-13.943 2.472-22.048 2.472h-68.62zm60.17 58.319c7.006 0 12.571-1.167 16.69-3.503 4.123-2.475 6.185-6.39 6.185-11.748v-.41c0-4.81-1.785-8.45-5.357-10.922-3.572-2.61-8.727-3.915-15.457-3.915H41.213v30.498zm8.45 58.11c7.004 0 12.501-1.236 16.485-3.71 3.984-2.611 5.974-6.594 5.974-11.951v-.412c0-4.81-1.851-8.585-5.562-11.333-3.71-2.886-9.685-4.326-17.929-4.326H41.213v31.732h37.711"
        fillRule="evenodd"
      />
      <path d="M159.185 246.319h31.736v144.248h-31.736V246.319M416.98 333.695l-55.432-87.376h37.09l34.415 57.907 35.032-57.907h36.063l-55.432 86.756v57.492H416.98v-56.872M673.332 246.319h31.733v115.397h71.918v28.85H673.332V246.32M799.548 246.319h108.804v28.233h-77.276v29.26h68v28.23h-68v30.294h78.305v28.23H799.548V246.32M375.808 311.659c-8.944-38.97-48.439-53.156-84.916-48.801-36.68 4.38-62.417 34.609-59.052 66.278 7.157 67.328 115.455 67.256 129.479.97l13.485 2.613c-11.85 67.312-100.101 94.907-146.32 37.83-28.864-35.643-23.367-87.935 12.276-116.798 53.757-43.532 130.001-5.748 135.048 57.908M657.693 311.659c-8.944-38.97-48.44-53.156-84.916-48.801-36.68 4.38-62.418 34.609-59.052 66.278 7.156 67.328 115.454 67.256 129.479.97l13.484 2.613c-11.85 67.312-100.101 94.907-146.32 37.83-28.863-35.643-23.365-87.935 12.277-116.798 53.756-43.532 130.002-5.748 135.048 57.908" />
      <path d="M345.019 64.339c96.814-89.304 152.305-91.25 131.257 29.713-27.9 160.33 169.416 97.468 284.568-24.91-60.519 101.35-375.263 266.69-316.499 32.14 51.547-205.738-158.361 138.566-374.84 54.86C203.521 191.996 315.07 91.966 345.02 64.339M788.45 12.632C793.598 4.067 801.557-.6 806.229 2.207c4.672 2.807 4.287 12.025-.86 20.59-5.145 8.566-13.105 13.233-17.777 10.426-4.672-2.807-4.287-12.025.86-20.59M712.192 426.094h31.013c4.466 0 8.415.653 11.851 1.957 3.503 1.239 6.387 2.99 8.653 5.257 1.787 1.784 3.159 3.88 4.122 6.284.961 2.404 1.444 5.05 1.444 7.935 0 3.228-.483 5.941-1.444 8.344a18.77 18.77 0 01-4.122 6.183c-1.717 1.717-3.777 3.16-6.182 4.328-2.404 1.098-5.015 1.888-7.83 2.369l22.151 29.467h-9.993l-20.916-28.023h-20.607v28.023h-8.14zm30.292 36.784c2.679 0 5.152-.344 7.419-1.031 2.268-.687 4.224-1.648 5.872-2.884 1.649-1.307 2.92-2.85 3.812-4.637.962-1.854 1.444-3.95 1.444-6.286 0-4.67-1.615-8.138-4.844-10.612-3.228-2.541-7.762-3.812-13.6-3.812h-22.255v29.262zm-169.37-36.784h52.133v7.42h-43.995v24.625h39.36v7.419h-39.36v25.244h44.51v7.416h-52.649zm-133.826 0h8.14v64.604h40.595v7.52h-48.735zm-133.824 0h8.139v64.604h40.596v7.52h-48.735zm-124.759-.514h7.624l32.868 72.638h-8.758l-8.447-19.062h-39.257l-8.552 19.062h-8.346zm20.092 46.262l-16.382-36.783-16.486 36.783zM36.68 499.454c-5.701 0-10.82-.963-15.352-2.883-4.465-1.924-8.312-4.57-11.54-7.933-3.16-3.367-5.599-7.283-7.315-11.747C.824 472.358 0 467.515 0 462.364c0-5.153.859-9.858 2.575-14.324 1.786-4.532 4.26-8.516 7.418-11.952 3.16-3.433 6.939-6.146 11.335-8.138 4.465-2.062 9.41-3.091 14.836-3.091 3.023 0 5.77.205 8.244.619 2.541.41 4.877 1.028 7.005 1.853 2.2.824 4.224 1.855 6.08 3.09a43.996 43.996 0 015.564 4.02l-5.254 6.182a32.734 32.734 0 00-4.328-3.297 24.046 24.046 0 00-4.947-2.576c-1.716-.756-3.639-1.34-5.77-1.752-2.06-.411-4.36-.618-6.903-.618-3.984 0-7.658.79-11.024 2.37-3.367 1.578-6.251 3.71-8.655 6.389-2.404 2.676-4.293 5.837-5.665 9.479-1.375 3.572-2.062 7.349-2.062 11.333 0 4.532.652 8.517 1.956 12.157 1.375 3.643 3.298 6.8 5.771 9.48 2.473 2.678 5.461 4.775 8.964 6.284 3.504 1.51 7.453 2.268 11.848 2.268 4.123 0 8.003-.686 11.644-2.061 3.641-1.441 6.697-3.16 9.17-5.152v-17.928H35.856v-7.315h29.777v28.747c-3.364 3.023-7.521 5.632-12.465 7.83-4.879 2.129-10.374 3.193-16.487 3.193zm842.616-29.775l-29.983-43.585h9.891l24.317 36.062 24.522-36.062h9.48l-29.983 43.48v28.644h-8.244v-28.54" />
    </svg>
  )
}