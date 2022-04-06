import axios from "axios";

const MENTORES_BASE_REST_API_URL = "http://localhost:8080/api/v1/mentores";

class MentoresService {
  getAllMentores() {
    return axios.get(MENTORES_BASE_REST_API_URL);
  }
}

export default new MentoresService();
