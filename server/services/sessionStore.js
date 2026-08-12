/**
 * Session Store Service
 * In-memory storage for session-based crop history, disease diagnosis logs, and user session preferences.
 */

export class SessionStoreService {
  /**
   * Initialize or retrieve session state
   */
  static getSessionData(req) {
    if (!req.session) {
      return {
        id: 'anon-' + Date.now(),
        plants: [],
        diagnoses: [],
        createdAt: new Date().toISOString()
      };
    }

    if (!req.session.plantAppData) {
      req.session.plantAppData = {
        id: req.sessionID || 'session-' + Date.now(),
        plants: [],
        diagnoses: [],
        createdAt: new Date().toISOString()
      };
    }

    return req.session.plantAppData;
  }

  /**
   * Add a plant lookup record to the session
   */
  static addPlantRecord(req, plantData) {
    const session = this.getSessionData(req);
    const record = {
      id: 'plt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      timestamp: new Date().toISOString(),
      ...plantData
    };

    // Keep most recent 50 items
    session.plants.unshift(record);
    if (session.plants.length > 50) {
      session.plants.pop();
    }

    return record;
  }

  /**
   * Add a plant disease / defect diagnosis record to the session
   */
  static addDiagnosisRecord(req, diagnosisData) {
    const session = this.getSessionData(req);
    const record = {
      id: 'diag_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      timestamp: new Date().toISOString(),
      ...diagnosisData
    };

    // Keep most recent 50 items
    session.diagnoses.unshift(record);
    if (session.diagnoses.length > 50) {
      session.diagnoses.pop();
    }

    return record;
  }

  /**
   * Clear all records in current session
   */
  static clearSession(req) {
    if (req.session && req.session.plantAppData) {
      req.session.plantAppData.plants = [];
      req.session.plantAppData.diagnoses = [];
    }
    return { success: true, message: 'Session history cleared successfully.' };
  }
}
