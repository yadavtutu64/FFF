export interface Batch {
  _id: string;
  name: string;
  previewImage: string;
  price?: number;
  // add other fields as needed
}

export interface Subject {
  _id: string;
  subjectName: string;
  teacherName: string;
  lectureCount: number;
  chapterCount: number;
  imageUrl: string;
  teacherImage: string;
}

export interface Topic {
  _id: string;
  topicName: string;
  lectureCount: number;
  notesCount: number;
  exerciseCount: number;
  // ...
}

export interface Content {
  _id: string;
  topic: string;
  videoDetails?: {
    image: string;
    duration: string;
    videoUrl?: string;
  };
  attachmentIds?: {
    baseUrl: string;
    key: string;
  }[];
  createdAt: string;
}

export interface Announcement {
  _id: string;
  heading: string;
  message: string;
  createdAt: string;
  attachment?: {
    baseUrl: string;
    key: string;
  };
}
