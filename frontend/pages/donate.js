import Form from '../components/Form';

export default function Donate() {
  return (
    <div>
      <h2>Blood Donation Form</h2>
      <Form endpoint="/donate" />
    </div>
  );
}
