let thStyle =
  ReactDOMRe.Style.make(
    ~padding="14px",
    ~backgroundColor="#89CFF0",
    ~borderRadius="4px",
    ~minWidth="40px",
    (),
  );

let rowStyle = ReactDOMRe.Style.make(~textAlign="center", ());
let tdStyle = ReactDOMRe.Style.make(~padding="8px", ());

[@react.component]
let make = () => {
  let validatorsData = ValidatorsSubscription.get();

  <div
    style={ReactDOMRe.Style.make(
      ~height="100%",
      ~display="flex",
      ~alignItems="center",
      ~justifyContent="center",
      (),
    )}>
    <table>
      <thead>
        <tr>
          <th style=thStyle> {React.string("Id")} </th>
          <th style=thStyle> {React.string("Moniker")} </th>
          <th style=thStyle> {React.string("Status")} </th>
          <th style=thStyle> {React.string("Tokens")} </th>
        </tr>
      </thead>
      <tbody>
        {switch (validatorsData) {
         | Data(data) =>
           data##validators
           ->Belt.Array.map(item =>
               <tr key={string_of_int(item##id)} style=rowStyle>
                 <td style=tdStyle>
                   {string_of_int(item##id)->React.string}
                 </td>
                 <td style=tdStyle> {item##moniker->React.string} </td>
                 <td style=tdStyle>
                   {string_of_bool(item##status)->React.string}
                 </td>
                 <td style=tdStyle>
                   {Js.Json.stringify(item##tokens)->React.string}
                 </td>
               </tr>
             )
           ->React.array
         | _ => React.null
         }}
      </tbody>
    </table>
  </div>;
};
