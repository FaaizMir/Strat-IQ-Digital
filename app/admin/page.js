"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => setSelectedSubmission(null);

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Contact Submissions</h1>
      </div>

      <div className="admin-table-container">
        {loading ? (
          <div style={{ padding: "2rem", textAlign: "center", color: "#64748b" }}>Loading submissions...</div>
        ) : submissions.length === 0 ? (
          <div style={{ padding: "2rem", textAlign: "center", color: "#64748b" }}>No submissions yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub.id} onClick={() => setSelectedSubmission(sub)}>
                  <td>{new Date(sub.created_at).toLocaleDateString()} {new Date(sub.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                  <td>{sub.first_name} {sub.last_name}</td>
                  <td>{sub.email}</td>
                  <td style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {sub.message || "No message"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selectedSubmission && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Submission Details</h3>
              <button className="modal-close" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="modal-field">
                <span className="modal-label">Date Submitted</span>
                <div className="modal-value">
                  {new Date(selectedSubmission.created_at).toLocaleString()}
                </div>
              </div>
              <div className="modal-field">
                <span className="modal-label">Name</span>
                <div className="modal-value">
                  {selectedSubmission.first_name} {selectedSubmission.last_name}
                </div>
              </div>
              <div className="modal-field">
                <span className="modal-label">Email</span>
                <div className="modal-value">
                  <a href={`mailto:${selectedSubmission.email}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
                    {selectedSubmission.email}
                  </a>
                </div>
              </div>
              <div className="modal-field">
                <span className="modal-label">Consent Given</span>
                <div className="modal-value">
                  {selectedSubmission.consent ? "Yes" : "No"}
                </div>
              </div>
              <div className="modal-field">
                <span className="modal-label">Message</span>
                <div className="modal-value" style={{ whiteSpace: 'pre-wrap' }}>
                  {selectedSubmission.message || "No message provided."}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
