const styles = `
  :host {
    display: block;
  }

  .occupancy-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .occupancy-label {
    font-size: 0.85rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .occupancy-bar {
    width: 100%;
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }

  .occupancy-fill {
    height: 100%;
    background: linear-gradient(90deg, #4caf50, #ffc107, #ff6b6b);
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .occupancy-text {
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
  }
`;

export default styles;
