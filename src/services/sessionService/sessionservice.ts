const sessionService = {
  async getSessionStatus(sessionId) {
    const response = await fetch(
      `https://new-ecom-api.vercel.app/session_status?session_id=${sessionId}`
    );
    const data = await response.json();
    return data;
  },
};

export default sessionService;
