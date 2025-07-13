const NextLinkMock = ({ href, children, ...props }: any) => (
  <a href={href} {...props}>
    {children}
  </a>
);

export default NextLinkMock;
