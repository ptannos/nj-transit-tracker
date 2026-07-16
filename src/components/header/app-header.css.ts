const styles = `
  :host {
    display: block;
    background-color: var(--primary-color, #0066cc);
    color: white;
    padding: 1.5rem 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo-icon {
    font-size: 2rem;
  }

  .tagline {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

export default styles;
