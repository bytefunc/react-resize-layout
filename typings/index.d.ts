type size = string | number;

export interface ResizeEvent {
  (args: {
    type: string;
    resizeChilds: { width: number }[];
    resizeId: number;
  }): void;
}

export const Resize: React.FC<{
  handleWidth?: size;
  handleColor?: string;
  onResizeStart?: ResizeEvent;
  onResizeStop?: ResizeEvent;
  onResizeMove?: ResizeEvent;
  onResizeWindow?: ResizeEvent;
}>;

export const ResizeVertical: React.FC<{
  id?: string;
  className?: string;
  overflow?: string;
  height?: size;
  minHeight?: size;
}>;

export const ResizeHorizon: React.FC<{
  id?: string;
  className?: string;
  overflow?: string;
  width?: size;
  minWidth?: size;
}>;
