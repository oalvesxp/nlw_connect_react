import { Copy, Link } from "lucide-react";
import { IconButton } from "../components/icon-button";
import { InputField, InputIcon, InputRoot } from "../components/input";

export function InviteLinkInput() {
	return (
		<InputRoot>
			<InputIcon>
				<Link size={16} />
			</InputIcon>
			<InputField
				readOnly
				defaultValue="http://localhost:3000/invite/1403740366920033052"
			/>

			<IconButton className="-mr-2">
				<Copy size={16} />
			</IconButton>
		</InputRoot>
	);
}
