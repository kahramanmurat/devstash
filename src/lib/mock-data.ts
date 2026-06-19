export type ItemType = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

export type Collection = {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
  itemCount: number;
  itemTypeIds: string[];
};

export type Item = {
  id: string;
  title: string;
  description: string;
  typeId: string;
  collectionId: string | null;
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  createdAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  isPro: boolean;
};

export const currentUser: User = {
  id: "user_1",
  name: "John Doe",
  email: "john@devstash.io",
  avatarUrl: null,
  isPro: false,
};

export const itemTypes: ItemType[] = [
  { id: "snippet", name: "Snippets", icon: "code", count: 24 },
  { id: "prompt", name: "Prompts", icon: "sparkles", count: 18 },
  { id: "command", name: "Commands", icon: "terminal", count: 15 },
  { id: "note", name: "Notes", icon: "file-text", count: 12 },
  { id: "file", name: "Files", icon: "file", count: 5 },
  { id: "image", name: "Images", icon: "image", count: 3 },
  { id: "link", name: "Links", icon: "link", count: 6 },
];

export const collections: Collection[] = [
  {
    id: "react-patterns",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    isFavorite: true,
    itemCount: 12,
    itemTypeIds: ["snippet", "file", "link"],
  },
  {
    id: "python-snippets",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    isFavorite: false,
    itemCount: 8,
    itemTypeIds: ["snippet", "file"],
  },
  {
    id: "context-files",
    name: "Context Files",
    description: "AI context files for projects",
    isFavorite: true,
    itemCount: 5,
    itemTypeIds: ["file", "image"],
  },
  {
    id: "interview-prep",
    name: "Interview Prep",
    description: "Technical interview preparation",
    isFavorite: false,
    itemCount: 24,
    itemTypeIds: ["file", "snippet", "link", "prompt"],
  },
  {
    id: "git-commands",
    name: "Git Commands",
    description: "Frequently used git commands",
    isFavorite: true,
    itemCount: 15,
    itemTypeIds: ["command", "file"],
  },
  {
    id: "ai-prompts",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    isFavorite: false,
    itemCount: 18,
    itemTypeIds: ["prompt", "snippet", "file"],
  },
];

export const items: Item[] = [
  {
    id: "item_1",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    typeId: "snippet",
    collectionId: "react-patterns",
    tags: ["react", "auth", "hooks"],
    isFavorite: true,
    isPinned: true,
    createdAt: "2026-01-15",
  },
  {
    id: "item_2",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    typeId: "snippet",
    collectionId: "react-patterns",
    tags: ["api", "error-handling", "fetch"],
    isFavorite: false,
    isPinned: true,
    createdAt: "2026-01-12",
  },
  {
    id: "item_3",
    title: "Git Rebase Interactive",
    description: "Squash and reorder commits before pushing",
    typeId: "command",
    collectionId: "git-commands",
    tags: ["git", "rebase"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-10",
  },
  {
    id: "item_4",
    title: "Code Review Prompt",
    description: "Comprehensive prompt for AI-assisted code review",
    typeId: "prompt",
    collectionId: "ai-prompts",
    tags: ["ai", "review"],
    isFavorite: true,
    isPinned: false,
    createdAt: "2026-01-08",
  },
  {
    id: "item_5",
    title: "Python List Comprehension Cheatsheet",
    description: "Common list comprehension patterns",
    typeId: "snippet",
    collectionId: "python-snippets",
    tags: ["python"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2026-01-05",
  },
];