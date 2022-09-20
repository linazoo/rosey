export interface AddTask {
  addTask: string;
  setAddTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  setTaskDescription: React.Dispatch<React.SetStateAction<string>>;
  setTaskFrequency: React.Dispatch<React.SetStateAction<string>>;
}