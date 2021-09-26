import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
      <>
       <div className="bg-gray-100">
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
        <script
dangerouslySetInnerHTML={{
  __html: `
  document.addEventListener('DOMContentLoaded', function() {
    const menus = document.querySelectorAll('.navbar-burger');
    const dropdowns = document.querySelectorAll('.navbar-menu');

    if (menus.length && dropdowns.length) {
        for (var i = 0; i < menus.length; i++) {
            menus[i].addEventListener('click', function() {
                for (var j = 0; j < dropdowns.length; j++) {
                    dropdowns[j].classList.toggle('hidden');
                }
            });
        }
    }
});
`,
}}
/>
      </>
    )
  }