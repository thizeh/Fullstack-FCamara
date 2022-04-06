import axios from "axios";

const MENTORES_BASE_REST_API_URL = "http://localhost:8080/api/v1/mentores";

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
}

export default new MentoresService();
