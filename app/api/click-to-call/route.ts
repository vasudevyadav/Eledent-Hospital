import { NextRequest, NextResponse } from "next/server";

const DEEPCALL_BASE_URL =
    "https://v4-api.deepcall.com/api/v3/clickToCall/para";

const USER_ID = process.env.DEEPCALL_USER_ID || "";
const TOKEN = process.env.DEEPCALL_TOKEN || "";

type AgentConfig = {
    agentName: string;
    agentNumber: string;
    agentCLI: string;
    customerCLI: string;
};

const agentConfigMap: Record<string, AgentConfig> = {
    kondapur: {
        agentName: "Dharani Kondapur",
        agentNumber: "917799619994",
        agentCLI: "07557122391",
        customerCLI: "07557122391",
    },
    manikonda: {
        agentName: "Manikonda",
        agentNumber: "917799659994",
        agentCLI: "07557122392",
        customerCLI: "07557122392",
    },
    kompally: {
        agentName: "Nandini Kompally",
        agentNumber: "917799769994",
        agentCLI: "07557122393",
        customerCLI: "07557122393",
    },
    kphb: {
        agentName: "Saidulu KPHB",
        agentNumber: "919059890578",
        agentCLI: "07557122394",
        customerCLI: "07557122394",
    },
    kukatpally: {
        agentName: "Saidulu KPHB",
        agentNumber: "919059890578",
        agentCLI: "07557122394",
        customerCLI: "07557122394",
    },
    banjarahills: {
        agentName: "Vijay Banjarahills",
        agentNumber: "917799649994",
        agentCLI: "07557122395",
        customerCLI: "07557122395",
    },
};

const normalizeLocationKey = (value: string) => {
    const key = value.toLowerCase().replace(/\s+/g, "").trim();

    if (key === "kukatpally") return "kphb";
    if (key === "kphb") return "kphb";
    if (key === "banjarahills") return "banjarahills";
    if (key === "banjarahill") return "banjarahills";
    if (key === "kompally") return "kompally";
    if (key === "kondapur") return "kondapur";
    if (key === "manikonda") return "manikonda";

    return key;
};

export async function POST(req: NextRequest) {
    try {
        if (!USER_ID || !TOKEN) {
            return NextResponse.json(
                {
                    success: false,
                    message: "DeepCall credentials are missing on server.",
                },
                { status: 500 }
            );
        }

        const body = await req.json();

        const customer = String(body?.customer || "").replace(/\D/g, "");
        const rawLocationId = String(body?.locationId || "");
        const locationKey = normalizeLocationKey(rawLocationId);

        if (!/^[0-9]{10}$/.test(customer)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Valid 10 digit customer number is required.",
                },
                { status: 400 }
            );
        }

        if (!locationKey || !agentConfigMap[locationKey]) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Valid location is required.",
                },
                { status: 400 }
            );
        }

        const selectedAgent = agentConfigMap[locationKey];

        const url = new URL(DEEPCALL_BASE_URL);
        url.searchParams.set("user_id", USER_ID);
        url.searchParams.set("token", TOKEN);
        url.searchParams.set("callFirst", "agent");
        url.searchParams.set("customer", customer);
        url.searchParams.set("customerCLI", selectedAgent.customerCLI);
        url.searchParams.set("agentType", "agent_number");
        url.searchParams.set("agent_number", selectedAgent.agentNumber);
        url.searchParams.set("webLogin", "no");
        url.searchParams.set("callLogin", "no");
        url.searchParams.set("agentCLI", selectedAgent.agentCLI);

        const response = await fetch(url.toString(), {
            method: "GET",
            cache: "no-store",
        });

        const rawText = await response.text();

        let parsedData: unknown = rawText;

        try {
            parsedData = JSON.parse(rawText);
        } catch {
            parsedData = rawText;
        }

        if (!response.ok) {
            return NextResponse.json(
                {
                    success: false,
                    message: "DeepCall API request failed.",
                    data: parsedData,
                },
                { status: response.status }
            );
        }

        return NextResponse.json({
            success: true,
            message: `Call initiated for ${selectedAgent.agentName}.`,
            data: parsedData,
        });
    } catch (error) {
        console.error("Click-to-call route error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while initiating the call.",
            },
            { status: 500 }
        );
    }
}