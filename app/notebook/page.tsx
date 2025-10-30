import { Layout } from '../components';
import { Header } from '../components';

export default async function Notebook() {

  return (
    <>
      <Header />
      <div>
        <iframe
          className="notebook"
          src="https://v2-embednotion.com/2965069feca5800c948cca76ce373cd9"
          style={{
            width: '100%',
            height: '100vh',
            padding: 0
          }}
        >
        </iframe>
        {/* Remove invalid <style> block or move styles to a CSS/SCSS file */}
      </div>
      <div className="py-8 text-center bg-tag-unselected">
        <p className="text-grey-400 font-light text-p">
          © 2025 Stephanie Stelzer
        </p>
      </div>
    </>
  );
}; 