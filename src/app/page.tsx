const PreviewPage = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-white rounded-lg shadow-lg">
            <caption className="text-lg font-semibold text-gray-700 p-4">
              CMS Preview Page Links Url
            </caption>
            <thead className="bg-blue-500 text-white uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6">Website Link</th>
                <th className="py-3 px-6">Preview Page Link</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a
                    href={
                      "https://themes.shopify.com/themes/amber/styles/amber/preview?industry%5B%5D=food-and-drink&price%5B%5D=paid&surface_detail=listing&surface_inter_position=1&surface_intra_position=1&surface_type=listing"
                    }
                  >
                    Shopify CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/demoSite"}>Shopify CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a
                    href={
                      "https://themes.shopify.com/themes/amber/styles/amber/preview?industry%5B%5D=food-and-drink&price%5B%5D=paid&surface_detail=listing&surface_inter_position=1&surface_intra_position=1&surface_type=listing"
                    }
                  >
                    Shopify CMS AboutUs
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/demoAboutUs"}>Shopify CMS AboutUs</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.rimmellondon.com/en-gb"}>
                    Rimmel London, Contentstack CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/contentStack_rimmel_london"}>
                    Rimmel London, Contentstack CMS
                  </a>{" "}
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://kirschberg.co.nz/"}>
                    {" "}
                    Kirschberg, Dato CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/kirschberg_cms"}> Kirschberg, Dato CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://dashdigital.studio/"}>
                    Dash Digital Studio, Prismic CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/dashDigital_prismic"}>
                    Dash Digital Studio, Prismic CMS
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.darrenbooth.com/"}>
                    Darren Booth, Squarespace CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/tiltonGroup_CMS"}>Darren Booth, Squarespace CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.hampy.be/"}>Hampy, DNN CMS</a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/hampyBe_CMS"}>Hampy, DNN CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.bulkapothecary.com/"}>
                    Bulk Apothecary, BigCommerce CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/bulkapothecary_bigCommerce"}>
                    Bulk Apothecary, BigCommerce CMS
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.giuligartner.com/"}>
                    Giulia Gartner, Webflow CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/giuligartner_cms"}>Giulia Gartner, Webflow CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://acresecurity.com/"}>
                    Acre Security, HubSpot CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/demo2"}> Acre Security, HubSpot CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.thomascook.com/"}>
                    Thomas Cook, Magnolia CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/demo4"}>Thomas Cook, Magnolia CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.astundnebel.at/"}>
                    Ast + Nebel, Drupal CMS{" "}
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/demo3"}>Ast + Nebel, Drupal CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://holdonplease.fr/"}>
                    Hold On Please, Kirby CMS
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/demo1"}> Hold On Please, Kirby CMS</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a
                    href={
                      "https://ystore.us/HTML/RedefineSolutions/new/shopify.html"
                    }
                  >
                    Redefine Shopify
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/grapesjs2"}> Redefine Shopify</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-white rounded-lg shadow-lg">
            <thead className="bg-blue-500 text-white uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6">Website Link</th>
                <th className="py-3 px-6">Preview Page Link</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/"}>Lano HomePage</a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/grapesjs"}>Lano HomePage</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/about-us.html"}>
                    Lano AboutUs
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/aboutUs"}>Lano AboutUs</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/parts.html"}>
                    Lano Part
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/parts"}>Lano Part</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/bobcat.html"}>
                    Lano Bobcat
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/bobcat"}>Lano Bobcat</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a
                    href={
                      "https://lano.redefineapp.io/terms-and-conditions.html"
                    }
                  >
                    Lano Terms and conditions
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/terms-and-conditions"}>
                    Lano Terms and conditions
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"/yashmay"}>Yashmay</a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/yashmay"}>Yashmay</a>
                </td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://lano.redefineapp.io/brands.html"}>
                    Alphabet Brands
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/alphabet-brand"}>Alphabet Brands</a>
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="py-3 px-6">
                  <a href={"https://www.corporategear.com/"}>
                    Corporate gear homepage
                  </a>
                </td>
                <td className="py-3 px-6 text-blue-600 hover:underline">
                  <a href={"/demo"}> Corporate gear homepage</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default PreviewPage;
