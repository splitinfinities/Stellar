import { newSpecPage } from '@stencil/core/testing';
import { Code } from './code';

describe('stellar-code', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Code],
      html: `<stellar-code><template><html><p>Nice!</p></html></template></stellar-code>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-code language=\"html\">
        <stellar-card padding=\"small\" shadow=\"light\">
          <section class=\"flush preview\">
            <div class=\"result\">
              <p>
                Nice!
              </p>
            </div>
          </section>
          <footer class="code">
           <pre aria-label="The html code" class="language-html" tabindex="0">\n<code class="language-html"><span class="tag token"><span class="tag token"><span class="punctuation token">
                     &lt;
                   </span>
                    p
                 </span><span class="punctuation token">
                   &gt;
                 </span></span>
               Nice!
               <span class="tag token"><span class="tag token"><span class="punctuation token">
                     &lt;/
                   </span>
                   p
                 </span><span class="punctuation token">
                   &gt;
                 </span></span></code><div class="hidden"><template>
                 <p>
                   Nice!
                 </p>
               </template><slot-fb><template></template></slot-fb></div></pre>
         </footer>
        </stellar-card>
      </stellar-code>
    `);
  });
})