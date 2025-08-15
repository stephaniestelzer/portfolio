import { Layout } from '../components';
import { Header } from '../components';

export default async function Notebook() {

  return (
    <>
      <Header />
      <Layout>
        <div className="min-h-screen pt-8">
          <div className="flex mt-8 mb-8 flex-col justify-center lg:flex-row">
            A place for documenting resources and learnings. Coming soon.
          </div>
        </div>
      </Layout>
      <div className="py-8 text-center bg-tag-unselected">
        <p className="text-grey-400 font-light text-p">
          © 2025 Stephanie Stelzer
        </p>
      </div>
    </>
  );
}; 