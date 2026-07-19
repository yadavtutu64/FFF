import axios from "axios";

const BASE_URL = "https://open-mora-natking151-ea9216fb.koyeb.app/pw/bb";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getBatches = async () => {
  // Assuming there's a /batches endpoint or using mock for now
  // Given the context, let's use a mock if not available,
  // but I'll try to fetch from /batches first if it exists.
  try {
    const response = await api.get("/batches");
    return response.data;
  } catch (error) {
    // Return mock data for initial development if API fails
    return [
      {
        _id: "1",
        name: "Arjuna JEE 2027",
        previewImage: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/2819ecfc-efc7-4215-a779-20a45e1655cf.png"
      },
      {
        _id: "2",
        name: "Lakshya NEET 2026",
        previewImage: "https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/2819ecfc-efc7-4215-a779-20a45e1655cf.png"
      }
    ];
  }
};

export const getBatchDetails = async (batchId: string) => {
  const response = await api.get(`/batch-details?batchId=${batchId}`);
  return response.data;
};

export const getTopics = async (batchId: string, subjectId: string, page = 1) => {
  const response = await api.get(`/topics?batchId=${batchId}&subjectId=${subjectId}&page=${page}`);
  return response.data;
};

export const getContents = async (batchId: string, subjectId: string, contentType: string, topicId: string, page = 1) => {
  const response = await api.get(`/contents?batchId=${batchId}&subjectId=${subjectId}&contentType=${contentType}&tag=${topicId}&page=${page}`);
  return response.data;
};

export const getAnnouncements = async (batchId: string, page = 1) => {
  const response = await api.get(`/announcements?batchId=${batchId}&page=${page}`);
  return response.data;
};
