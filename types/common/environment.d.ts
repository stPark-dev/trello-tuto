/**
 * Environment For ViewTrack Platform
 *
 * Rules:
 *   - `URL` Type Variable Is Must Not End With '/'.
 *   - `boolean` Type Variable Is Must Be A `1` or `0`.
 *      If You Want To Use The Default Value
 *      Remove Variable From Environment File Or
 *      Leave The Variable To Whitespace.
 *   - Every Variable Value Must Wrapped By Double Quote.
 * Utils:
 *   - Generate Random Key:
 *     `cat /dev/urandom | tr -dc a-zA-Z0-9 | fold -w 40 | head -n 1`
 */
declare namespace NodeJS {
  interface NodejsEnv {
    /**
     * Server Working Environment:
     *
     * - Default: undefined
     *   * "development"
     *   * "production"
     */
    NODE_ENV?: "development" | "production";
  }

  /**
   * `debug` Package Environment
   */
  interface DebugEnvironment {
    /**
     * `debug` NPM Module Environment.:
     *
     * - Default: undefined
     *   * `opensearch`: For Logging API Server Opensearch Log
     */
    DEBUG?: "opensearch";
  }

  /**
   * `winston` Package Environment
   */
  interface WinstonEnvironment {
    /**
     * `debug` NPM Module Environment.:
     *
     * - Default: "info"
     */
    WST_LEVEL?: "info";
  }

  /**
   * `next` Package Environment
   */
  interface NextEnvironment {
    /**
     * `next` Listen Port
     *
     * @description
     * It is initialized with the parameter value
     * passed when the server is executed through the `npm run dev` command.
     * Values set in the .env file are ignored.
     * e.g.) npm run dev -- --port 8000
     *
     * - Default: 3000
     */
    PORT: Required<number>;

    /**
     * `next` hostname
     *
     * @description
     * It is initialized with the parameter value
     * passed when the server is executed through the `npm run dev` command.
     * Values set in the .env file are ignored.
     * e.g.) npm run dev -- --hostname 127.0.0.1
     *
     * - Default: "0.0.0.0"
     */
    HOSTNAME: Required<string>;
  }

  /**
   * `next-auth` Package Environment
   */
  interface NextAuthEnvironment {
    /**
     * `next-auth` Encryption Base Secret
     *
     * - Use Same Secret Between API And UI
     * - These Must Be Same `JWT` Authentication.
     *   * Because, User Must Do Signin Twice.
     */
    NEXTAUTH_SECRET: Required<string>;

    /**
     * `next-auth` NEXTAUTH_URL Environment
     *
     * @description URL For `next-auth` Running System.
     *
     * - http[s]://<host>[:port]
     * - Documents:
     *   * https://next-auth.js.org/configuration/options
     * - WARNING!:
     *   * UI Environment Has Same Name Of Variable.
     */
    NEXTAUTH_URL: Required<string>;
    GITHUB_ID: Required<string>;
    GITHUB_SECRET: Required<string>;
    GOOGLE_CLIENT_ID: Required<string>;
    GOOGLE_CLIENT_SECRET: Required<string>;
    KAKAO_CLIENT_ID: Required<string>;
    KAKAO_CLIENT_SECRET: Required<string>;
    NAVER_CLIENT_ID: Required<string>;
    NAVER_CLIENT_SECRET: Required<string>;
  }

  interface ViewtrackEnvironment {
    NEXT_PUBLIC_VIEWTRACK_BASEURL: string;
    /**
     * Service Title
     */
    NEXT_PUBLIC_SVC_TITLE: Required<string>;

    /**
     * Service Subtitle
     */
    NEXT_PUBLIC_SVC_SUBTITLE?: string;

    NEXT_PUBLIC_SVC_ID: string;
    NEXT_PUBLIC_SVC_LABEL: string;
    /**
     * `Redis` Server URL
     *
     * - redis[s]://[id:][pass@]<hostname>:<port>/<db>
     */
    // RDS_URL?: string;

    /**
     * Server Base URL For HTTP
     *
     * - Default: `http://127.0.0.1:${PORT}`
     * - http[s]://<host>[:port]
     */
    NEXT_PUBLIC_URL: Required<string>;

    /**
     * Uploaded File Storage Base URL
     *
     * - Default: `file:///tmp/`
     */
    STR_URL: string;
  }

  interface Process {
    env: NodejsEnv & DebugEnvironment & WinstonEnvironment & NextEnvironment & NextAuthEnvironment & ViewtrackEnvironment;
  }
}
