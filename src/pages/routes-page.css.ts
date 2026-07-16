const styles = `
  :host {
    display: block;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    border-bottom: 2px solid var(--border-color, #ddd);
    padding-bottom: 1.5rem;
  }

  .page-title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--secondary-color, #333);
  }

  .search-controls {
    flex: 1;
    max-width: 320px;
  }

  .search-input {
    width: 100%;
    padding: 0.7rem 0.9rem;
    border: 2px solid var(--border-color, #ddd);
    border-radius: 12px;
    font-size: 0.95rem;
  }

  .search-input:focus {
    outline: none;
    border-color: var(--primary-color, #0066cc);
  }

  .filter-controls {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    border: 2px solid var(--border-color, #ddd);
    border-radius: 12px;
    background: white;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .filter-btn:hover {
    border-color: var(--primary-color, #0066cc);
    color: var(--primary-color, #0066cc);
  }

  .filter-btn.active {
    background-color: var(--primary-color, #0066cc);
    color: white;
    border-color: var(--primary-color, #0066cc);
  }

  .routes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem 1rem;
    color: #999;
  }

  .empty-state-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export default styles;
