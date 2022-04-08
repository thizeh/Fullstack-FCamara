import axios from "axios";

const MENTORES_BASE_REST_API_URL =
  "http://fc29.us-east-1.elasticbeanstalk.com/api/v1/mentores";

class MentoresService {
  getAllMentores() {
    return axios.get(MENTORES_BASE_REST_API_URL);
  }

  createMentores(mentores) {
    return axios.post(MENTORES_BASE_REST_API_URL, mentores);
  }

  getMentoresById(mentoresId) {
    return axios.get(MENTORES_BASE_REST_API_URL + "/" + mentoresId);
  }

  updateMentores(mentoresId, mentores) {
    return axios.put(MENTORES_BASE_REST_API_URL + "/" + mentoresId, mentores);
  }

  deleteMentores(mentoresId) {
    return axios.delete(MENTORES_BASE_REST_API_URL + "/" + mentoresId);
  }
}

export default new MentoresService();
