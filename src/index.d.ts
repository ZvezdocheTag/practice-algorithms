export interface minStepsSimilarObj {
  [key: string]: number;
}

export interface dynamicKeyWithArray {
  [key: string]: number[];
}

export interface ObjWithVal {
  val: number;
}
export interface dynamicKeyWithObj {
  [key: string]: ObjWithVal[];
}

export interface Node {
  val: number;
  children: Node[];
  level?: number | undefined;
}
export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  level?: number | undefined;
}

export interface OperationWithDate {
  date: string;
  amount: string;
}
export interface GroupedByYear {
  [key: string]: string[];
}
