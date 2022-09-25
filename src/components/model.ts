export interface AddTask {
  handleAdd: (e: React.FormEvent) => void;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setTaskDescription: React.Dispatch<React.SetStateAction<string>>;
  setTaskFrequency: React.Dispatch<React.SetStateAction<string>>;
}