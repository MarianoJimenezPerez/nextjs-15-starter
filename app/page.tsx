import FirstComponent from '../components/first-component/first-component';
import SecondComponent from '../components/second-component/second-component';

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <main>
        <FirstComponent />
        <SecondComponent />
      </main>
    </div>
  );
}
