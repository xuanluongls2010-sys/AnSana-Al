var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
import_dotenv.default.config();
var SYSTEM_INSTRUCTION = `B\u1EA1n l\xE0 AnSana AI - Tr\u1EE3 l\xFD \u1EA3o h\u1ED7 tr\u1EE3 t\xE2m l\xFD h\u1ECDc \u0111\u01B0\u1EDDng THPT (\u0111\u1EB7c bi\u1EC7t l\xE0 kh\u1ED1i 10 v\xE0 tr\u01B0\u1EDDng n\u1ED9i tr\xFA). B\u1EA1n l\xE0 ng\u01B0\u1EDDi b\u1EA1n \u0111\u1ED3ng h\xE0nh \u1EA5m \xE1p, l\u1EAFng nghe kh\xF4ng ph\xE1n x\xE9t b\u1EB1ng ph\u01B0\u01A1ng ph\xE1p CBT \u0111\u1EC3 gi\u1EA3i t\u1ECFa \xE1p l\u1EF1c h\u1ECDc \u0111\u01B0\u1EDDng.

NGUY\xCAN T\u1EAEC:
1. X\u01B0ng h\xF4 g\u1EA7n g\u0169i: "m\xECnh" - "b\u1EA1n", "t\u1EDB" - "c\u1EADu", x\u01B0ng "AnSana AI". T\u1EF1 \u0111\u1ED9ng nh\u1EADn di\u1EC7n v\xE0 ph\u1EA3n h\u1ED3i theo ng\xF4n ng\u1EEF/t\u1EEB vi\u1EBFt t\u1EAFt gi\u1EDBi tr\u1EBB \u0111ang d\xF9ng (k, uh, ko, dc, m, t...).
2. Thang \u0111o DASS 21: G\u1EEDi c\xE2u h\u1ECFi theo t\u1EEBng c\u1EE5m nh\u1ECF (3-4 c\xE2u/l\u01B0\u1EE3t) k\xE8m m\u1EE9c \u0111i\u1EC3m t\u1EEB 0-3. Sau c\xF9ng, t\u1ED5ng h\u1EE3p \u0111i\u1EC3m Stress (nh\xE2n h\u1EC7 s\u1ED1 2) v\xE0 \u0111\u01B0a ra ph\xE2n lo\u1EA1i khoa h\u1ECDc (B\xECnh th\u01B0\u1EDDng - Nh\u1EB9 - V\u1EEBa - N\u1EB7ng - R\u1EA5t n\u1EB7ng).
3. H\u01B0\u1EDBng d\u1EABn gi\u1EA3m stress c\u1EE5 th\u1EC3: c\xE1c k\u1EF9 thu\u1EADt th\u1EDF 4-7-8, th\u1EDF h\u1ED9p, vi\u1EBFt nh\u1EADt k\xFD c\u1EA3m x\xFAc, thi\u1EC1n \u0111\u1ECBnh... tr\xE1nh l\u1EDDi khuy\xEAn chung chung.
4. Gi\u1EDBi h\u1EA1n: Ch\u1EC9 h\u1ED7 tr\u1EE3 t\xE2m l\xFD h\u1ECDc \u0111\u01B0\u1EDDng, t\u1EEB ch\u1ED1i kh\xE9o l\xE9o c\xE1c ch\u1EE7 \u0111\u1EC1 kh\xE1c (kh\xF4ng gi\u1EA3i b\xE0i t\u1EADp, kh\xF4ng gi\u1EA3i tr\xED). Kh\xF4ng k\xEA \u0111\u01A1n thu\u1ED1c hay ch\u1EA9n \u0111o\xE1n thay b\xE1c s\u0129.

QUY TR\xCCNH H\u1ED6 TR\u1EE2 & CHUY\u1EC2N TUY\u1EBEN TINH T\u1EBE (Khi c\xF3 \xFD ngh\u0129 t\u1EF1 h\u1EA1i ho\u1EB7c DASS 21 R\u1EA5t n\u1EB7ng):
- B\u01B0\u1EDBc 1 (G\u1EE3i m\u1EDF): Tr\u1EA5n an v\xE0 kh\xE9o l\xE9o \u0111\u1EC1 xu\u1EA5t th\u0103m d\xF2: "T\u1EDB th\u1EA5y tr\u1EA1ng th\xE1i hi\u1EC7n t\u1EA1i c\u1EE7a c\u1EADu \u0111ang kh\xE1 m\u1EC7t m\u1ECFi v\xE0 h\u01A1i qu\xE1 t\u1EA3i. B\xEAn c\u1EA1nh vi\u1EC7c tr\xF2 chuy\u1EC7n c\xF9ng nhau, c\u1EADu c\xF3 mu\u1ED1n t\u1EDB chia s\u1EBB th\xEAm th\xF4ng tin c\u1EE7a ph\xF2ng tham v\u1EA5n tr\u01B0\u1EDDng ho\u1EB7c c\xE1c t\u1ED5ng \u0111\xE0i t\xE2m l\xFD b\u1EA3o m\u1EADt mi\u1EC5n ph\xED \u0111\u1EC3 c\u1EADu tham kh\u1EA3o khi c\u1EA7n kh\xF4ng?"
- B\u01B0\u1EDBc 2 (H\xE0nh \u0111\u1ED9ng theo l\u1EF1a ch\u1ECDn):
  * N\u1EBFu \u0110\u1ED2NG \xDD: Cung c\u1EA5p th\xF4ng tin ph\xF2ng tham v\u1EA5n tr\u01B0\u1EDDng ho\u1EB7c Hotline 1900599930 / T\u1ED5ng \u0111\xE0i 111 d\u1EA1ng Markdown.
  * N\u1EBFu T\u1EEA CH\u1ED0I: T\xF4n tr\u1ECDng v\xE0 kh\xF4ng nh\u1EAFc l\u1EA1i hotline, ti\u1EBFp t\u1EE5c l\u1EAFng nghe, h\u01B0\u1EDBng d\u1EABn th\u1EF1c h\xE0nh xoa d\u1ECBu t\u1EA1i ch\u1ED7.`;
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid input. 'messages' must be an array." });
      }
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "GEMINI_API_KEY is not configured on the server. Please add it via the Settings > Secrets UI."
        });
      }
      const ai = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
      const contents = messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));
      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7
        }
      });
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Transfer-Encoding", "chunked");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");
      for await (const chunk of responseStream) {
        if (chunk.text) {
          res.write(chunk.text);
        }
      }
      res.end();
    } catch (err) {
      console.error("Chat error:", err);
      if (!res.headersSent) {
        res.status(500).json({ error: err.message || "An error occurred with AnSana AI's core service." });
      } else {
        res.end();
      }
    }
  });
  app.post("/api/reframe", async (req, res) => {
    try {
      const { stressfulThought } = req.body;
      if (!stressfulThought) {
        return res.status(400).json({ error: "stressfulThought is required." });
      }
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "GEMINI_API_KEY is missing. Please configure it in the Secrets panel."
        });
      }
      const ai = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `H\xE3y gi\xFAp t\xF4i t\xE1i \u0111\u1ECBnh h\xECnh suy ngh\u0129 ti\xEAu c\u1EF1c sau: "${stressfulThought}".`,
        config: {
          systemInstruction: "B\u1EA1n l\xE0 chuy\xEAn gia t\xE1i khung nh\u1EADn th\u1EE9c c\u1EE7a AnSana AI. H\xE3y nh\u1EADn di\u1EC7n c\xE1c m\xE9o m\xF3 nh\u1EADn th\u1EE9c (t\u1ED1i \u0111a 4 l\u1ED7i), \u0111\u01B0a ra m\u1ED9t l\u1EDDi gi\u1EA3i th\xEDch chia s\u1EBB \u1EA5m \xE1p b\u1EB1ng ti\u1EBFng Vi\u1EC7t (m\u1EA1nh m\u1EBD, th\u1EA5u c\u1EA3m, t\u1ED1i \u0111a 3 c\xE2u) v\xE0 g\u1EE3i \xFD ch\xEDnh x\xE1c 3 suy ngh\u0129 t\xE1i khung (reframes) l\xE0nh m\u1EA1nh, t\u1EF1 bao dung v\xE0 c\xE2n b\u1EB1ng b\u1EB1ng ti\u1EBFng Vi\u1EC7t. Lu\xF4n tr\u1EA3 v\u1EC1 d\u1EEF li\u1EC7u \u0111\u1ECBnh d\u1EA1ng JSON ch\xEDnh x\xE1c theo c\u1EA5u tr\xFAc y\xEAu c\u1EA7u.",
          responseMimeType: "application/json",
          responseSchema: {
            type: import_genai.Type.OBJECT,
            properties: {
              distortionsIdentified: {
                type: import_genai.Type.ARRAY,
                items: { type: import_genai.Type.STRING },
                description: "C\xE1c m\xE9o m\xF3 nh\u1EADn th\u1EE9c t\xECm ki\u1EBFm th\u1EA5y trong suy ngh\u0129 ti\xEAu c\u1EF1c b\u1EB1ng ti\u1EBFng Vi\u1EC7t g\u1ECDn g\xE0ng d\u1EC5 hi\u1EC3u (v\xED d\u1EE5: 'T\u01B0 duy Tr\u1EAFng \u0111en / \u0110\u01B0\u1EE3c \u0103n c\u1EA3 ng\xE3 v\u1EC1 kh\xF4ng', 'Th\u1EA3m h\u1ECDa h\xF3a suy ngh\u0129', 'M\u1EC7nh \u0111\u1EC1 b\u1EAFt bu\u1ED9c Ph\u1EA3i', '\u0110\u1ECDc suy ngh\u0129 ng\u01B0\u1EDDi kh\xE1c', 'B\xF3i t\u01B0\u01A1ng lai ti\xEAu c\u1EF1c', 'D\xE1n nh\xE3n b\u1EA3n th\xE2n', 'Suy lu\u1EADn c\u1EA3m x\xFAc qu\xE1 m\u1EE9c')."
              },
              explanation: {
                type: import_genai.Type.STRING,
                description: "M\u1ED9t \u0111o\u1EA1n gi\u1EA3i th\xEDch ng\u1EAFn, \u1EA5m \xE1p, th\u1EA5u c\u1EA3m b\u1EB1ng ti\u1EBFng Vi\u1EC7t (t\u1ED1i \u0111a 2-3 c\xE2u) v\u1EC1 l\xFD do v\xEC sao th\xF3i quen t\u01B0 duy n\xE0y ch\u01B0a \u0111\xFAng th\u1EF1c t\u1EBF v\xE0 l\xE0m gia t\u0103ng lo \xE2u c\u1EE7a h\u1ECDc sinh."
              },
              reframes: {
                type: import_genai.Type.ARRAY,
                items: { type: import_genai.Type.STRING },
                description: "Ch\xEDnh x\xE1c ba c\xE1ch suy ngh\u0129 thay th\u1EBF c\xE2n b\u1EB1ng, bao dung, th\u1EF1c t\u1EBF v\xE0 t\xEDch c\u1EF1c h\u01A1n b\u1EB1ng ti\u1EBFng Vi\u1EC7t \u0111\u1EC3 n\xE2ng \u0111\u1EE1 tinh th\u1EA7n v\xE0 xoa d\u1ECBu \xE1p l\u1EF1c h\u1ECDc t\u1EADp."
              }
            },
            required: ["distortionsIdentified", "explanation", "reframes"]
          }
        }
      });
      const jsonStr = response.text || "{}";
      res.json(JSON.parse(jsonStr));
    } catch (err) {
      console.error("Reframe error:", err);
      res.status(500).json({ error: err.message || "An error occurred while analyzing the thought." });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AnSana AI HTTP Server listening on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
