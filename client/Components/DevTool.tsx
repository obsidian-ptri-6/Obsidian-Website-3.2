/** @format */

import { React, CodeBlock, dracula } from "../../deps.ts";

const Overview = (props: any) => {
  return (
    <div className='docContainer'>
      <h1>Obsidian-Developer-Tool</h1>
      <p>
        The Obsidian Developer Tool is an easy-to-use chrome developer tool extension designed for applications using Obsidian. With this extension, users can:
      </p>
      <p>
        <ul>
          <li>
            visualize GraphQL query and cache performance metrics
          </li>
          <li>
            send dynamic queries and mutations to a user's database
          </li>
          <li>
            view and evict data from the browser cache
          </li>
        </ul>
      </p>
      <p>
        These features require minimal configuration and are designed to cater to the needs of Obsidian developers utilizing Obsidian Wrapper in their applications.
      </p>
      <p>
        The Obsidian Developer Tool is an open-source developer tool accelerated by OS Labs.
      </p>
      <h2>Installation</h2>
      <p>
        The Obsidian Developer Tool is currently under the review process to be launched on the Chrome Extension Store. In the meantime, the easiest way to use the developer tool is to build from source and manually add as a chrome extension. To build the latest version, execute the following commands:
      </p>
      <p>
        <code className='obsidianInline'>
          git clone https://github.com/oslabs-beta/obsidian-developer-tool
        </code>
      </p>
      <p>
        <code className='obsidianInline'>npm install
        </code>
      </p>
      <p>
        <code className='obsidianInline'>npm run build
        </code>
      </p>
      <p>
        Then, in the Chrome Extensions Page (chrome://extensions/), toggle "Developer mode" on in the upper righthand corner, click on "Load unpacked" and navigate to /Obsidian-developer-tool/dist/ and click "Select". The extension should now be loaded and available within chrome developer tools.
      </p>
      <p>

      </p>
      <h2>Usage and Configuration</h2>
      <p>
        Clone the Obsidian repository <a className='pinkA' href='https://github.com/open-source-labs/obsidian'>
          here
        </a>, and in the Obsidian Wrapper file, on line 10, update chromeExtensionId to the value of the unique chrome extension ID for the tool you just unpacked in your extensions. This can be found at chrome://extensions/ on the card for your loaded extension.
      </p>
      <p>
        There is no further configuration necessary. As long as your application is using Obsidian Wrapper (imported as a path to the local file with the updated chrome extension), the devtool will be able to retrieve cache data and query metrics on actions initiated in the app.
      </p>
      <p>
        <strong>Usage Note:</strong> Use of this developer tool requires Obsidian version 5.0 or greater.
      </p>
      <ul>
        <li>
          <strong>Performance:</strong> Navigate to this tab if you would like to visualize the response time of your GraphQL queries. You can access a log of your queries and mutations, as well as the corresponding response time data. Here you can see the lower response times on subsequent queries for the same data - Obsidian's caching strategies at work!
        </li>
        <img src='../static/performance.gif'></img>
        <li>
          <strong>Cache:</strong> Navigate to this tab to see the data currently in your client-side cache based on queries being made. All of the cached data will appear here, and you also have the ability to manually clear the cache with the 'clear cache' button.
        </li>
          <img src='../static/cache.gif'></img>
        <li>
          <strong>Playground:</strong> In order to use this feature, you must plug in your server's GraphQL endpoint (ex. <a className='pinkA' href='http://localhost:3000/graphQL'>
            http://localhost:3000/graphQL
          </a>
          ) and click the submit button. You will now be able to write queries as well as mutations in order to retrieve and view your data.
          strategy.
        </li>
          <img src='../static/playground.gif'></img>
      </ul>



      <p>
      </p>
      <h2>More information:</h2>
      <p>
        Obsidian and Obsidian demo documentation:
      </p>
      <ul>
        <li>
          <a className='pinkA' href='https://github.com/open-source-labs/obsidian'>
            Obsidian
          </a>
        </li>
        <li>
          <a className='pinkA' href='https://github.com/oslabs-beta/obsidian-demo-5.0'>
            Obsidian Demo
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Overview;