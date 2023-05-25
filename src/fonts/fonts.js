import { /*Inter,*/ Flow_Circular, Nunito, Quicksand } from "next/font/google";

//export const inter = Inter({ subsets: ["latin"] });
export const flow_circular = Flow_Circular({
    weight: "400",
    subsets: ["latin"],
});
export const nunito = Nunito({
    weight: ["200", "400", "600"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});
export const quicksand = Quicksand({
    weight: ["300", "400", "600"],
    style: ["normal"],
    subsets: ["latin"],
});
