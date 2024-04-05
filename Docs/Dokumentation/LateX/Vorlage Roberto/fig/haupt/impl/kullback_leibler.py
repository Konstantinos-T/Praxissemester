def kullback_leibler(p,q):
    """

    """
    # Einzelwerte der Kullback-Leibler Divergenz
    kl_vals = np.where(q != 0, p * np.log(p / q), 0)
    # Kullback-Leibler Divergenz
    kl_div = np.sum(kl_vals)
    # maximaler Einzelwert
    max_val = np.max(kl_vals)
    # maximaler Gradient
    max_gradient = np.max(np.gradient(kl_vals))
    return kl_div, max_val, max_gradient