import { useState } from "react";
import Input from "../components/Input";
import Card from "../components/Card";

export default function CommunicationSetting() {
  /* ================== STATE ================== */
  const [smsFields, setSmsFields] = useState({
    senderId: true,
    shortcode: true,
    apiKey: true,
    apiUrl: true,
  });

  const [emailFields, setEmailFields] = useState({
    senderName: true,
    senderEmail: true,
    smtpHost: true,
    port: true,
    username: true,
    password: true,
  });

  const [smsParams, setSmsParams] = useState([{ id: 1 }]);
  const [emailParams, setEmailParams] = useState([{ id: 1 }]);

  /* ================== HANDLERS ================== */
  const removeSmsField = (field) =>
    setSmsFields({ ...smsFields, [field]: false });

  const removeEmailField = (field) =>
    setEmailFields({ ...emailFields, [field]: false });

  const addSmsParam = () =>
    setSmsParams([...smsParams, { id: Date.now() }]);

  const removeSmsParam = (id) =>
    setSmsParams(smsParams.filter((p) => p.id !== id));

  const addEmailParam = () =>
    setEmailParams([...emailParams, { id: Date.now() }]);

  const removeEmailParam = (id) =>
    setEmailParams(emailParams.filter((p) => p.id !== id));

  return (
    <div className="content">
      {/* HEADER */}
      <div className="page-header">
        <div>
          <h1>Communication Setting</h1>
          <p>Configure SMS And Email Delivery Channels</p>
        </div>
        <button className="save-btn">Save Changes</button>
      </div>

      {/* ================== SMS CONFIG ================== */}
      <div className="section-title">SMS Configuration</div>
      <Card>
        <div className="row">
          {smsFields.senderId && (
            <Input
              label="SMS Sender ID"
              showDelete
              onDelete={() => removeSmsField("senderId")}
            />
          )}
          {smsFields.shortcode && (
            <Input
              label="SMS Shortcode"
              showDelete
              onDelete={() => removeSmsField("shortcode")}
            />
          )}
        </div>

        <div className="row">
          {smsFields.apiKey && (
            <Input
              label="API Key"
              showDelete
              onDelete={() => removeSmsField("apiKey")}
            />
          )}
          {smsFields.apiUrl && (
            <Input
              label="API URL"
              showDelete
              onDelete={() => removeSmsField("apiUrl")}
            />
          )}
        </div>

        {/* ADDITIONAL SMS PARAMS */}
        <div className="section-title">Additional Parameters</div>

        {smsParams.map((param) => (
          <div className="row" key={param.id}>
            <Input label="Parameter Name" />
            <Input
              label="Value"
              showDelete
              onDelete={() => removeSmsParam(param.id)}
            />
          </div>
        ))}

        <button className="add-btn" onClick={addSmsParam}>
          + Add Parameters
        </button>
      </Card>

      {/* ================== EMAIL CONFIG ================== */}
      <div className="section-title">Email Configuration</div>
      <Card>
        <div className="row">
          {emailFields.senderName && (
            <Input
              label="Sender Name"
              showDelete
              onDelete={() => removeEmailField("senderName")}
            />
          )}
          {emailFields.senderEmail && (
            <Input
              label="Sender Email"
              showDelete
              onDelete={() => removeEmailField("senderEmail")}
            />
          )}
        </div>

        <div className="row">
          {emailFields.smtpHost && (
            <Input
              label="SMTP Host"
              showDelete
              onDelete={() => removeEmailField("smtpHost")}
            />
          )}
          {emailFields.port && (
            <Input
              label="Port"
              showDelete
              onDelete={() => removeEmailField("port")}
            />
          )}
        </div>

        <div className="row">
          {emailFields.username && (
            <Input
              label="Username"
              showDelete
              onDelete={() => removeEmailField("username")}
            />
          )}
          {emailFields.password && (
            <Input
              label="Password"
              showDelete
              onDelete={() => removeEmailField("password")}
            />
          )}
        </div>

        {/* ADDITIONAL EMAIL PARAMS */}
        <div className="section-title">Additional Parameters</div>

        {emailParams.map((param) => (
          <div className="row" key={param.id}>
            <Input label="Parameter Name" />
            <Input
              label="Value"
              showDelete
              onDelete={() => removeEmailParam(param.id)}
            />
          </div>
        ))}

        <button className="add-btn" onClick={addEmailParam}>
          + Add Parameters
        </button>
      </Card>
    </div>
  );
}
