import { format } from "date-fns";
import React from "react";
import * as I from "../../index.styled";

export default function HomeLayout() {
  return (
    <I.MainContainer>
      <I.PageHeader bordered>
				<I.PageTitle>
					<h2>Jaegar Resto</h2>
					<p>{format(new Date(), 'EEEE, d MMM yyyy')}</p>
				</I.PageTitle>
			</I.PageHeader>
    </I.MainContainer>
  );
}
