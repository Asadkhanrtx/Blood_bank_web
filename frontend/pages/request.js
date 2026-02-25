import Form from '../components/Form';

export default function Request() {
  return (
    <div>
      <h2>Blood Request Form</h2>
      <Form endpoint="/request" />
    </div>
  );
}
