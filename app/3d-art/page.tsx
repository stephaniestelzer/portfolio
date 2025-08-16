import { Layout } from '../components';
import { Header } from '../components';

export default async function Art() {
    return (
        <>
      <Header />
      <Layout>
        <div className="min-h-screen pt-8 px-6">
          <div className="flex mt-8 mb-8 flex-col justify-center lg:flex-row">
            In the process of moving this work from a previous portfolio. Coming soon.
          </div>
        </div>
      </Layout>
      <div className="py-8 text-center bg-tag-unselected">
        <p className="text-grey-400 font-light text-p">
          © 2025 Stephanie Stelzer
        </p>
      </div>
    </>
    )
}